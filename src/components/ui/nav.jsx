import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'About', url: '#About', icon: Home },
    { name: 'Skills', url: '#Experience', icon: User },
    { name: 'Projects', url: '#Projects', icon: Briefcase },
    { name: 'Contact', url: '#Contact', icon: FileText }
  ]

  return (
    <NavBar items={navItems} />
  )
}