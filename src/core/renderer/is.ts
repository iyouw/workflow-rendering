import type { IAbilityRenderer } from "../abstraction/renderer/ability/i-ability-renderer";
import type { IAppRenderer } from "../abstraction/renderer/app/i-app-renderer";
import type { IAttachRenderer } from "../abstraction/renderer/i-attach-renderer";
import type { IGroupRenderer } from "../abstraction/renderer/i-group-renderer";
import type { IRenderer } from "../abstraction/renderer/i-renderer";
import type { IIfRenderer } from "../abstraction/renderer/if/i-if-renderer";
import type { IParallelRenderer } from "../abstraction/renderer/parallel/i-parallel-renderer";
import type { IVirtualRenderer } from "../abstraction/renderer/virtual/i-virtual-renderer";

export const isApp = (renderer: IRenderer): renderer is IAppRenderer => renderer.isApp;
export const isAbility = (renderer: IRenderer): renderer is IAbilityRenderer => renderer.isAbility;
export const isIf = (renderer: IRenderer): renderer is IIfRenderer => renderer.isIf;
export const isParallel = (renderer: IRenderer): renderer is IParallelRenderer => renderer.isParallel;
export const isVirtual = (renderer: IRenderer): renderer is IVirtualRenderer => renderer.isVirtual;
export const isGroup = (renderer: IRenderer): renderer is IGroupRenderer => renderer.isGroup;
export const isAttach = (renderer: IRenderer): renderer is IAttachRenderer => renderer.isAttach;