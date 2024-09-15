
import {
    CirclePlus,
    LayoutPanelTop,
    Palette,
    Code,
    Image,
  } from "lucide-react";
export const SidebarNavlinks = [
    {
        Icon: <CirclePlus size={26} />,
       to: "/create",
    },{
        Icon: <LayoutPanelTop />,
        to: "/components",
    },{
        Icon: <Palette />,
        to: "/appearance",
    },{
        Icon: <Code />,
        to: "/code",
    },{
        Icon: <Image />,
        to: "/images",
    },
];