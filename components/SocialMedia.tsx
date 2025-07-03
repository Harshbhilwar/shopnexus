
import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";

interface Props {
    className?:string;
    iconClassName?:string;
    tooltipClassName?: string;
}

    const socialLink = [
    {
        title: "YouTube", 
        href: "https://www.youtube.com/@SHOPNEXUS-t2q",
        icon: <Youtube className="w-4 h-4"/>
    },
    {
        title: "GitHub", 
        href: "https://www.youtube.com/@SHOPNEXUS-t2q",
        icon: <Github className="w-4 h-4"/>
    },
    {
        title: "Linkedin", 
        href: "https://www.youtube.com/@SHOPNEXUS-t2q",
        icon: <Linkedin className="w-4 h-4"/>
    },
    {
        title: "Facebook", 
        href: "https://www.youtube.com/@SHOPNEXUS-t2q",
        icon: <Facebook className="w-4 h-4"/>
    },
    {
        title: "Slack", 
        href: "https://www.youtube.com/@SHOPNEXUS-t2q",
        icon: <Slack className="w-4 h-4"/>
    },
];

const SocialMedia = ({className, iconClassName, tooltipClassName}: Props) => {
    return (
        <TooltipProvider>
            <div className={cn("flex items-center gap-3.5",className)}>
                {socialLink?.map((item) => (
                    <Tooltip key={item?.title}>
                        <TooltipTrigger asChild>
                            <Link 
                            key={item?.title} 
                            target="_blank"
                            rel="noopener no referrer"
                            href={item?.href}
                            className={cn("p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",iconClassName)}>
                            {item?.icon}
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent
                        className={cn("bg-white text-darkColor font-semibold border border-shop_light_green", tooltipClassName)}
                        >
                            {item?.title}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    );
    };

export default SocialMedia;