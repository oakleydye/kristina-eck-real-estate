import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { Agent } from "@/lib/agents";

interface AgentBioCardProps {
  agent: Agent;
}

export function AgentBioCard({ agent }: AgentBioCardProps) {
  return (
    <div className="grid md:grid-cols-5 gap-12 items-start">
      {/* Photo */}
      <div className="md:col-span-2">
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl ring-8 ring-primary/10">
          <Image
            src={agent.photo}
            alt={agent.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>

      {/* Bio */}
      <div className="md:col-span-3 space-y-6">
        <div>
          <Badge variant="secondary" className="mb-4">
            {agent.title}
          </Badge>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            {agent.name}
          </h3>
          <p className="text-xl text-primary font-medium">Real Estate Agent</p>
        </div>

        <div className="space-y-4 text-muted-foreground">
          {agent.bio.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
