/**
 * IDX Broker API Client
 * Documentation: https://middleware.idxbroker.com/docs/api/
 */

const IDX_API_BASE = 'https://api.idxbroker.com';

export interface IDXProperty {
  idxID: string;
  listingID: string;
  address: string;
  cityName: string;
  state: string;
  zipcode: string;
  countyName: string;
  propType: string;
  propStatus: string;
  listPrice: string;
  beds: string;
  totalBaths: string;
  sqFt: string;
  acres: string;
  yearBuilt: string;
  remarksConcat: string;
  image: {
    0?: string;
    1?: string;
    caption?: string;
  };
  photoList: string[];
  latitude: string;
  longitude: string;
  mlsStatus: string;
  listingAgentID: string;
  listingOfficeID: string;
  coListingAgentID: string;
  subdivision: string;
  geoModificationTimestamp: string;
  created: string;
  updated: string;
  detailsURL: string;
  fullDetailsURL: string;
}

export interface IDXSearchParams {
  propertyType?: string;
  bedrooms?: number;
  bathrooms?: number;
  minPrice?: number;
  maxPrice?: number;
  city?: string;
  zipcode?: string;
  status?: string;
  limit?: number;
  offset?: number;
}

class IDXBrokerClient {
  private apiKey: string;
  private partnerKey: string;
  private accountID: string;

  constructor() {
    this.apiKey = process.env.IDX_BROKER_API_KEY || '';
    this.partnerKey = process.env.IDX_BROKER_PARTNER_KEY || '';
    this.accountID = process.env.IDX_BROKER_ACCOUNT_ID || '';
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    if (!this.apiKey) {
      throw new Error('IDX Broker API key not configured. Please add IDX_BROKER_API_KEY to your .env file');
    }

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'accesskey': this.apiKey,
      'outputtype': 'json',
      ...options.headers,
    };

    const response = await fetch(`${IDX_API_BASE}${endpoint}`, {
      ...options,
      headers,
      cache: 'no-store', // Ensure fresh data
    });

    if (!response.ok) {
      throw new Error(`IDX Broker API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Get featured properties
   */
  async getFeaturedProperties(limit: number = 6): Promise<IDXProperty[]> {
    try {
      const data = await this.request<IDXProperty[]>('/clients/featured');
      return data.slice(0, limit);
    } catch (error) {
      console.error('Error fetching featured properties:', error);
      return [];
    }
  }

  /**
   * Search properties
   */
  async searchProperties(params: IDXSearchParams = {}): Promise<IDXProperty[]> {
    try {
      // Build query string
      const queryParams = new URLSearchParams();

      if (params.propertyType) queryParams.append('pt', params.propertyType);
      if (params.bedrooms) queryParams.append('bd', params.bedrooms.toString());
      if (params.bathrooms) queryParams.append('tb', params.bathrooms.toString());
      if (params.minPrice) queryParams.append('lp', params.minPrice.toString());
      if (params.maxPrice) queryParams.append('hp', params.maxPrice.toString());
      if (params.city) queryParams.append('ccz', params.city);
      if (params.zipcode) queryParams.append('zip', params.zipcode);

      const data = await this.request<IDXProperty[]>(`/clients/search?${queryParams.toString()}`);
      return data;
    } catch (error) {
      console.error('Error searching properties:', error);
      return [];
    }
  }

  /**
   * Get property details by listing ID
   */
  async getPropertyDetails(listingID: string): Promise<IDXProperty | null> {
    try {
      const data = await this.request<IDXProperty>(`/clients/listing/${listingID}`);
      return data;
    } catch (error) {
      console.error('Error fetching property details:', error);
      return null;
    }
  }

  /**
   * Get all active properties
   */
  async getActiveProperties(limit: number = 50): Promise<IDXProperty[]> {
    try {
      const data = await this.request<IDXProperty[]>('/clients/properties');
      return data.slice(0, limit);
    } catch (error) {
      console.error('Error fetching active properties:', error);
      return [];
    }
  }

  /**
   * Get cities with available properties
   */
  async getCities(): Promise<string[]> {
    try {
      const data = await this.request<{ cityName: string }[]>('/clients/cities');
      return data.map(city => city.cityName);
    } catch (error) {
      console.error('Error fetching cities:', error);
      return [];
    }
  }

  /**
   * Get available property types
   */
  async getPropertyTypes(): Promise<{ id: string; name: string }[]> {
    try {
      const data = await this.request<Record<string, string>>('/clients/propertytypes');
      return Object.entries(data).map(([id, name]) => ({ id, name }));
    } catch (error) {
      console.error('Error fetching property types:', error);
      return [];
    }
  }
}

// Export singleton instance
export const idxBroker = new IDXBrokerClient();

// Helper function to format price
export function formatPrice(price: string | number): string {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numPrice);
}

// Helper function to get primary image
export function getPrimaryImage(property: IDXProperty): string {
  if (property.image?.[0]) return property.image[0];
  if (property.photoList?.[0]) return property.photoList[0];
  return '';
}
