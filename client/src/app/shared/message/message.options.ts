export type MessageType = 'success' | 'info' | 'warning' | 'error'

export interface MessageOptions {
  type: MessageType;
  message: string | number;
  iconClass?: string;
  duration?:number;
  showClose?: boolean;
  center?: boolean;
  onClose?: Function;
  top?: number;
}
