export type PhaseStatus = 'completed' | 'in_progress' | 'pending_approval' | 'upcoming';

export interface TaskItem {
  id: string;
  title: string;
  status: 'done' | 'in_progress' | 'pending';
  deliverableDate?: string;
  responsible: string;
  notes?: string;
}

export interface Phase {
  id: number;
  code: string;
  name: string;
  duration: string;
  responsible: string;
  responsibleRole: string;
  progress: number;
  status: PhaseStatus;
  startDate: string;
  endDate: string;
  description: string;
  summary: string;
  tasks: TaskItem[];
}

export type DocumentCategory = 
  | 'Briefing' 
  | 'Plantas' 
  | '3D Render' 
  | 'Projeto Legal' 
  | 'Projetos Complementares'
  | 'Memoriais'
  | 'CAD';

export interface DocumentItem {
  id: string;
  name: string;
  phaseId: number;
  phaseName: string;
  category: DocumentCategory;
  size: string;
  updatedAt: string;
  isReadOnly: boolean;
  version: string;
  downloadUrl: string;
  thumbnailUrl?: string;
  previewType: 'image' | 'pdf' | 'dwg';
  approved: boolean;
  approvedAt?: string;
  description?: string;
}

export interface ActivityLog {
  id: string;
  date: string;
  time: string;
  author: string;
  role: string;
  title: string;
  description: string;
  type: 'upload' | 'approval' | 'update' | 'milestone';
  phaseName?: string;
}

export interface BriefingData {
  style: string;
  familyMembers: number;
  suites: number;
  parkingSpaces: number;
  hasPool: boolean;
  hasGourmet: boolean;
  hasHomeOffice: boolean;
  hasWineCellar: boolean;
  hasAutomation: boolean;
  solarOrientationPreference: string;
  budgetRange: string;
  specialRequests: string;
  inspirationKeywords: string[];
  lastSavedAt?: string;
  isCompleted?: boolean;
}

export interface ProjectInfo {
  id: string;
  name: string;
  clientName: string;
  code: string;
  address: string;
  city: string;
  totalArea: string;
  landArea: string;
  overallProgress: number;
  currentPhaseId: number;
  architectInCharge: string;
  engineerInCharge: string;
  startDate: string;
  estimatedCompletion: string;
  decisionsApproved: number;
  totalDecisions: number;
}
