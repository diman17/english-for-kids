export enum ActionType {
  SHOW_NAVBAR = 'SHOW_NAVBAR',
  HIDE_NAVBAR = 'HIDE_NAVBAR',
}

export const showNavbar = () => ({
  type: ActionType.SHOW_NAVBAR,
});

export const hideNavbar = () => ({
  type: ActionType.HIDE_NAVBAR,
});
