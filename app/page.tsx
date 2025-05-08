import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, FileText, Github, Linkedin, Mail, Pencil, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectCard } from "@/components/project-card"
import { SkillBar } from "@/components/skill-bar"
import { TakeawayCard } from "@/components/takeaway-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">Portfolio</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link href="#about" className="px-3 py-2 text-sm font-medium hover:text-primary">
                About
              </Link>
              <Link href="#skills" className="px-3 py-2 text-sm font-medium hover:text-primary">
                Skills
              </Link>
              <Link href="#projects" className="px-3 py-2 text-sm font-medium hover:text-primary">
                Projects
              </Link>
              <Link href="#takeaways" className="px-3 py-2 text-sm font-medium hover:text-primary">
                Takeaways
              </Link>
              <Link href="#contact" className="px-3 py-2 text-sm font-medium hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/pimg.jpg')] bg-cover bg-center relative">
    <div className="absolute inset-0 bg-black opacity-30"></div> {/* Semi-transparent overlay */}
    <div className="container px-4 md:px-6 relative z-10"> {/* Content on top */}
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2 w-full text-white">
  <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
    Hi, I'm <span className="text-white">Anmol Bisht</span>
  </h1>
  <p className="text-base sm:text-lg max-w-full">
    A passionate Computer Science Student...
  </p>
</div>

                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#contact">
                      Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#projects">View My Work</Link>
                  </Button>

                  <div className="flex items-center gap-2">
                  <Button>
                    <FileText className="h-5 w-5 text-primary" />
                    <Link href="/resume (4).pdf" className="" download>
                    Resume
                    </Link>
                    </Button>
                  </div>
                  


                </div>
                <div className="flex gap-4">
                  <Link href="https://github.com/ianmolbisht" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/anmol-bisht-002741202/" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:anmolbisht432@gmail.com">
                    <Button variant="ghost" size="icon">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/por.jpg?height=600&width=600"
                  alt="Profile Picture"
                  width={600}
                  height={600}
                  className="aspect-square overflow-hidden rounded-full object-cover border-4 border-primary/20"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">About Me</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                I'm a student at Graphic Era Hill Univeristy pursuing a degree in Bachelor's of Technology in Computer Science and Engineering. My passion lies in Machine Learning, IoT and Embedded Systems, Generative AI, and I'm constantly exploring new technologies and methodologies to expand my knowledge and
                skills.
              </p>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Throughout my academic journey, I've developed a strong foundation in various disciplines,
                which has enabled me to work on some projects that solve real-world problems. I believe in the power
                of technology to create positive change, and I'm committed to contributing to that vision.
              </p>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                When I'm not coding or studying, you can find me in the mountains, hiking in the wild being in the nature and peace. These activities help me
                maintain a balanced lifestyle and often inspire creative solutions to technical challenges.
              </p>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">My Skills</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Here are some of the technologies and tools I've worked with
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 mt-12">
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Technical Skills</h3>
                <SkillBar name="C/C++" percentage={90} />
                <SkillBar name="Next.js" percentage={40} />
                <SkillBar name="IoT" percentage={70} />
                {/* <SkillBar name="Node.js" percentage={35} /> */}
                <SkillBar name="Python" percentage={70} />
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Soft Skills</h3>
                <SkillBar name="Problem Solving" percentage={85} />
                <SkillBar name="Communication" percentage={85} />
                <SkillBar name="Teamwork" percentage={90} />
                {/* <SkillBar name="Time Management" percentage={90} /> */}
                <SkillBar name="Adaptability" percentage={90} />
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">My Projects</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Check out some of the projects I've worked on
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <ProjectCard
                title="CruzLink - A smart safety helmet device"
                description="A smart safety helmet device for auto accident detection with automated SOS signalling along with hands free voice control over mobile phones."
                tags={["ESP8266", "MPU6050","Arduino","Next.js"]}
                imageUrl="/cruzLOGO.jpg?height=300&width=400"
                githubUrl="https://github.com"
                demoUrl="https://example.com"
              />
              <ProjectCard
                title="EchoVision – Empowering the Visually Impaired Through Sound"
                description="Developing a deep learning-based assistive system using a CNN-LSTM model for real-time human action recognition and object detection, delivering audio-based visual descriptions to support visually impaired individuals.."
                tags={["Python","TensorFlow", "OpenCV", "CNN-LSTM"]}
                imageUrl="/echo.jpg?height=300&width=400"
                githubUrl="https://github.com"
                demoUrl="https://example.com"
              />
              <ProjectCard
                title="Breast Cancer Detection"
                description="A machine learning model developed to classify breast cancer as malignant or benign using diagnostic data and supervised learning algorithms."
                tags={["Python", "Scikit-learn", "Pandas"]}                
                imageUrl="/cancer.jpg?height=300&width=400"
                githubUrl="https://github.com"
                demoUrl="https://example.com"
              />
              <ProjectCard
                title="Portfolio Website"
                description="A personal portfolio website showcasing my skills, projects, and experiences."
                tags={["Next.js", "Tailwind CSS", "Vercel"]}
                imageUrl="/portf.jpg?height=300&width=400"
                githubUrl="https://github.com"
                demoUrl="https://example.com"
              />
              <ProjectCard
                title="End-to-End Encrypted Messaging System"
                description="Working on a secure messaging platform with custom string-based encryption algorithms and real-time communication using Socket.io."
                tags={["Socket.io", "JavaScript", "Encryption"]}                
                imageUrl="/msg.jpg?height=300&width=400"
                githubUrl="https://github.com"
                demoUrl="https://example.com"
              />
            </div>
          </div>
        </section>
        <section id="takeaways" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">My Takeaways</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Valuable insights and knowledge gained from my classes and experiences
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-5xl">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="videos">Videos</TabsTrigger>
                  <TabsTrigger value="notes">Notes & Images</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <TakeawayCard
                      title="WEEK-I"
                      description="Career Development and Self-Awareness"
                      type="notes"
                      url="/week1.pdf"
                      date="March, 2025" course={"PESE"}
                      />


                    <TakeawayCard
                      title="WEEK-II"
                      description="SWOC Analysis (Self-Evaluation & Growth Planning)"
                      type="notes"
                      url="/week2.pdf"
                      date="March, 2025" course={"PESE"}
                    />
                    <TakeawayCard
                      title="WEEK-III"
                      description="Mastering Presentation Skills"
                      type="notes"
                      url="/week3.pdf"
                      date="April, 2025" course={"PESE"}
                    />
                    <TakeawayCard
                      title="WEEK-IV"
                      description="Effective Writing Skills"
                      type="notes"
                      url="/week4.pdf"
                      date="April, 2025" course={"PESE"}
                    />
                  <TakeawayCard
                      title="Group Presentation"
                      description="Group Presentation on Online Tutoring System"
                      type="video"
                      url="/video3"
                      date="April, 2025"
                      course="PESE"
                    />
                    <TakeawayCard
                      title="Personal Profiling"
                      description=""
                      type="video"
                      url="/video3"
                      date="April, 2025"
                      course="PESE"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="videos" className="mt-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                   
          
                    <TakeawayCard
                      title="Group Presentation"
                      description="Group Presentation on Online Tutoring System"
                      type="video"
                      url="/video3"
                      date="April, 2025"
                      course="PESE"
                    />
                    <TakeawayCard
                      title="Personal Profiling"
                      description=""
                      type="video"
                      url="/video3"
                      date="April, 2025"
                      course="PESE"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="notes" className="mt-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <TakeawayCard
                      title="WEEK-I"
                      description="Career Development and Self-Awareness"
                      type="notes"
                      url="/week1.pdf"
                      date="March, 2025" course={"PESE"}
                      />


                    <TakeawayCard
                      title="WEEK-II"
                      description="SWOC Analysis (Self-Evaluation & Growth Planning)"
                      type="notes"
                      url="/week2.pdf"
                      date="March, 2025" course={"PESE"}
                    />
                    <TakeawayCard
                      title="WEEK-III"
                      description="Mastering Presentation Skills"
                      type="notes"
                      url="/week3.pdf"
                      date="April, 2025" course={"PESE"}
                    />
                    <TakeawayCard
                      title="WEEK-IV"
                      description="Effective Writing Skills"
                      type="notes"
                      url="/week4.pdf"
                      date="April, 2025" course={"PESE"}
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I'm always open to new opportunities and collaborations. Feel free to reach out!
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>anmolbisht432@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    <span>Anmol Bisht</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <Link href="/resume (4).pdf" className="underline" download>
                      Download Resume
                    </Link>

                  </div>
                </div>
                <div className="flex gap-4">
                  <Link href="https://github.com/ianmolbisht" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/anmol-bisht-002741202/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="https://x.com/ianmolbisht" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Code className="h-5 w-5" />
                      <span className="sr-only">X</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-lg border bg-background p-6">
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Send Me a Message</h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter subject"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Anmol Bisht. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="#takeaways" className="text-sm font-medium hover:text-primary">
              Takeaways
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
