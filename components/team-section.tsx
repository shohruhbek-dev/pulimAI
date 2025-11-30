import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Github, Palette, Bold } from "lucide-react"

const teamMembers = [
  {
    name: "Shohruh Abdusattarov",
    role: "Team Lead & AI/ML Engineer",
    skills: ["TensorFlow", "PyTorch", "NLP", "Data Science"],
    image: "/team_lead.png",
    linkedin: "https://www.linkedin.com/in/shohruh-abdusattarov-507918354/?trk=opento_sprofile_details",
    github: "https://github.com/shohruhbek-dev",
  },
  {
    name: "Kozimov Nurillo",
    role: "Frontend Developer",
    skills: ["React", "Next.js", "TypeScript", "Tailwind"],
    image: "/frontend.jpg",
    linkedin: "https://www.linkedin.com/in/nurullo-kozimov-49007a2b0",
    github: "https://github.com/Mayestroo",
  },
  {
    name: "Shoxrux Tojimahammtov",
    role: "Backend Developer",
    skills: ["Python", "Django", "REST APIs", "Databases"],
    image: "/backend.PNG",
    linkedin: "https://www.linkedin.com/in/shoxruxbek-tojimahammatov-3a8321389?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    github: "https://github.com/shoxrux1905",
  },
  {
    name: "Ma'mirjon Kozimov",
    role: "UI/UX Designer",
    skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Prototyping"],
    image: "/ux.jpg",
    linkedin: "https://www.linkedin.com/in/ma-mirjon-kozimov-256031381/",
    behance: "https://www.behance.net/mamirjonkozimov",
  },
]

export function TeamSection() {
  return (
    <section id="jamoa" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Bizning Jamoa</h2>
          
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <Card key={i} className="bg-card border-border hover:shadow-xl transition-all hover:-translate-y-1 group">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full "
                  />
                </div>
                <h3 className="font-bold text-foreground text-lg">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {member.skills.map((skill, j) => (
                    <Badge key={j} variant="secondary" className="text-xs bg-muted text-muted-foreground">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-center gap-3">
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  {"github" in member && (
                    <a
                    href={member.github}
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>)}
                  {"behance" in member && (
                    <a
                      href={member.behance}
                      className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      title="Behance"
                    >
                      <Bold className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
