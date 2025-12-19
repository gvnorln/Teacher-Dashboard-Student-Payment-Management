export type StudentStatus = "ACTIVE" | "PAUSE" | "STOP";

export type Branch =
  | "SINCERE_SMB"
  | "SINCERE_SAWANGAN"
  | "TOPAZ"
  | "SINCERE_CROWN";

export const BRANCH_LABEL: Record<Branch, string> = {
  SINCERE_SMB: "Sincere SMB",
  SINCERE_SAWANGAN: "Sincere Sawangan",
  TOPAZ: "Topaz",
  SINCERE_CROWN: "Sincere Crown",
};

export interface Student {
  id: string;
  name: string;
  instrument: string;
  schedule: string;
  rate: number;
  status: StudentStatus;
  branch: Branch;
}
