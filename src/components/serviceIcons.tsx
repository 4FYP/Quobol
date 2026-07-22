import {
  Bot,
  Building2,
  Cloud,
  Code2,
  Database,
  Headphones,
  ShieldCheck,
  Smartphone,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import type { ServiceIcon } from '../data/services'

const map: Record<ServiceIcon, LucideIcon> = {
  ai: Bot,
  crm: Building2,
  web: Smartphone,
  rpa: Workflow,
  cloud: Cloud,
  custom: Code2,
  data: Database,
  security: ShieldCheck,
  consulting: Headphones,
  staff: Users,
}

export function getServiceIcon(icon: ServiceIcon): LucideIcon {
  return map[icon]
}
