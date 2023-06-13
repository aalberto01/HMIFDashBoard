export interface IClientListTable {
  id: string;
  contact: string;
  priority: string;
  phone: string;
  email: string;
  contactCounter: number;
  totalSells: number;
  active?: boolean;
}

export interface ILeadListTable {
  id: string;
  lead: string;
  status: string;
  phone: string;
  email: string;
  active?: boolean;
}

