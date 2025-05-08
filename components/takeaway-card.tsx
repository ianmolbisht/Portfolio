import Image from "next/image"
import Link from "next/link"
import { Calendar, FileText, Video } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface TakeawayCardProps {
  title: string
  description: string
  type: "video" | "notes"
  url: string
  date: string
  course: string
}

export function TakeawayCard({ title, description, type, url, date, course }: TakeawayCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">{title}</h3>
          <Badge variant={type === "video" ? "default" : "secondary"}>
            {type === "video" ? <Video className="mr-1 h-3 w-3" /> : <FileText className="mr-1 h-3 w-3" />}
            {type === "video" ? "Video" : "Notes"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground">{description}</p>
        {type === "notes" && (
          <div className="mt-4">
            <Image
              src={url || "/placeholder.svg"}
              alt={title}
              width={400}
              height={200}
              className="rounded-md object-cover"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 flex flex-col items-start gap-2">
        <div className="flex items-center text-xs text-muted-foreground">
          <Calendar className="mr-1 h-3 w-3" />
          {date} • {course}
        </div>
        <Button asChild size="sm" variant={type === "video" ? "default" : "outline"}>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            {type === "video" ? "Watch Video" : "View Notes"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
