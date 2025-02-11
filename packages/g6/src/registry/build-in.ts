import { ComboCollapse, ComboExpand, Fade, NodeCollapse, NodeExpand, PathIn, PathOut, Translate } from '../animations';
import {
  BrushSelect,
  ClickSelect,
  CollapseExpand,
  CreateEdge,
  DragCanvas,
  DragElement,
  DragElementForce,
  FocusElement,
  HoverActivate,
  LassoSelect,
  OptimizeViewportTransform,
  ScrollCanvas,
  ZoomCanvas,
} from '../behaviors';
import {
  Circle,
  CircleCombo,
  Cubic,
  CubicHorizontal,
  CubicVertical,
  Diamond,
  Donut,
  Ellipse,
  HTML,
  Hexagon,
  Image,
  Line,
  Polyline,
  Quadratic,
  Rect,
  RectCombo,
  Star,
  Triangle,
} from '../elements';
import {
  AntVDagreLayout,
  CircularLayout,
  ComboCombinedLayout,
  ConcentricLayout,
  D3ForceLayout,
  DagreLayout,
  ForceAtlas2Layout,
  ForceLayout,
  FruchtermanLayout,
  GridLayout,
  MDSLayout,
  RadialLayout,
  RandomLayout,
  compactBox,
  dendrogram,
  indented,
  mindmap,
} from '../layouts';
import { blues, greens, oranges, spectral, tableau } from '../palettes';
import {
  Background,
  BubbleSets,
  Contextmenu,
  Fullscreen,
  GridLine,
  History,
  Hull,
  Legend,
  Timebar,
  Toolbar,
  Tooltip,
  Watermark,
} from '../plugins';
import { dark, light } from '../themes';
import {
  ArrangeDrawOrder,
  CollapseExpandCombo,
  CollapseExpandNode,
  GetEdgeActualEnds,
  ProcessParallelEdges,
  UpdateRelatedEdge,
} from '../transforms';
import type { ExtensionRegistry } from './types';

/**
 * <zh/> 内置插件统一在这里注册。
 * <en/> Built-in extensions are registered here.
 */
export const BUILT_IN_EXTENSIONS: ExtensionRegistry = {
  animation: {
    'combo-collapse': ComboCollapse,
    'combo-expand': ComboExpand,
    'node-collapse': NodeCollapse,
    'node-expand': NodeExpand,
    'path-in': PathIn,
    'path-out': PathOut,
    fade: Fade,
    translate: Translate,
  },
  behavior: {
    'brush-select': BrushSelect,
    'click-select': ClickSelect,
    'collapse-expand': CollapseExpand,
    'create-edge': CreateEdge,
    'drag-canvas': DragCanvas,
    'drag-element-force': DragElementForce,
    'drag-element': DragElement,
    'focus-element': FocusElement,
    'hover-activate': HoverActivate,
    'lasso-select': LassoSelect,
    'optimize-viewport-transform': OptimizeViewportTransform,
    'scroll-canvas': ScrollCanvas,
    'zoom-canvas': ZoomCanvas,
  },
  combo: {
    circle: CircleCombo,
    rect: RectCombo,
  },
  edge: {
    cubic: Cubic,
    line: Line,
    polyline: Polyline,
    quadratic: Quadratic,
    'cubic-horizontal': CubicHorizontal,
    'cubic-vertical': CubicVertical,
  },
  layout: {
    'antv-dagre': AntVDagreLayout,
    'combo-combined': ComboCombinedLayout,
    'compact-box': compactBox,
    'force-atlas2': ForceAtlas2Layout,
    circular: CircularLayout,
    concentric: ConcentricLayout,
    'd3-force': D3ForceLayout,
    dagre: DagreLayout,
    dendrogram,
    force: ForceLayout,
    fruchterman: FruchtermanLayout,
    grid: GridLayout,
    indented,
    mds: MDSLayout,
    mindmap,
    radial: RadialLayout,
    random: RandomLayout,
  },
  node: {
    circle: Circle,
    diamond: Diamond,
    ellipse: Ellipse,
    hexagon: Hexagon,
    html: HTML,
    image: Image,
    rect: Rect,
    star: Star,
    donut: Donut,
    triangle: Triangle,
  },
  palette: {
    spectral,
    tableau,
    oranges,
    greens,
    blues,
  },
  theme: {
    dark,
    light,
  },
  plugin: {
    'bubble-sets': BubbleSets,
    'grid-line': GridLine,
    background: Background,
    contextmenu: Contextmenu,
    fullscreen: Fullscreen,
    history: History,
    hull: Hull,
    legend: Legend,
    timebar: Timebar,
    toolbar: Toolbar,
    tooltip: Tooltip,
    watermark: Watermark,
  },
  transform: {
    'update-related-edges': UpdateRelatedEdge,
    'arrange-draw-order': ArrangeDrawOrder,
    'collapse-expand-combo': CollapseExpandCombo,
    'collapse-expand-node': CollapseExpandNode,
    'process-parallel-edges': ProcessParallelEdges,
    'get-edge-actual-ends': GetEdgeActualEnds,
  },
};
