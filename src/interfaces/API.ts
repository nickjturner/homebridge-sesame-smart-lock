export interface Lock {
  device_id: string;
  serial: string;
  nickname: string;
}

export interface LockStatus {
  locked: boolean;
  responsive: boolean;
  battery: number;
}

export interface Control {
  task_id: string;
}

export interface TaskResult {
  task_id: string;
  status: string;
  successful: boolean;
  error: string;
}