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

export interface QuestionOption {
  id: string;
  label: string;
  isCustom?: boolean;
}

export interface DisciplineQuestion {
  id: string;
  title: string;
  description?: string;
  hint?: string;
  options: QuestionOption[];
}

export interface DisciplineItem {
  id: string;
  name: string;
  shortName: string;
  description: string;
  questions: DisciplineQuestion[];
}

export type DisciplineAnswers = Record<string, {
  selectedOptionId: string;
  customText?: string;
}>;

export interface BriefingData {
  style?: string;
  familyMembers?: number;
  suites?: number;
  parkingSpaces?: number;
  hasPool?: boolean;
  hasGourmet?: boolean;
  hasHomeOffice?: boolean;
  hasWineCellar?: boolean;
  hasAutomation?: boolean;
  solarOrientationPreference?: string;
  budgetRange?: string;
  specialRequests?: string;
  inspirationKeywords?: string[];
  lastSavedAt?: string;
  isCompleted?: boolean;
  selectedDisciplines?: string[];
  disciplineAnswers?: DisciplineAnswers;
}

export interface ProjectInfo {
  id: string;
  name: string;
  clientName: string;
  developer?: string;
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
  facadeImage?: string;
  units?: string;
  floors?: string;
  typology?: string;
  tagline?: string;
  statusBadge?: string;
}
