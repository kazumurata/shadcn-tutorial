import AppSidebarHeader from '@/app/(guest)/_components/app-sidebar-header';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/shared/components/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/shared/components/sidebar';
import {
  Book,
  BookOpen,
  ChevronRight,
  Component,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';

type MenuSubItem = {
  title: string;
  url?: string;
};

type MenuItem = {
  title: string;
  icon?: LucideIcon;
  subItems?: MenuSubItem[];
};

type MenuGroup = {
  title: string;
  items?: MenuItem[];
};

const groups: MenuGroup[] = [
  {
    title: 'About shadcn/ui',
    items: [
      {
        title: 'Components',
        icon: Component,
        subItems: [
          {
            title: 'Button',
            url: '/components/button',
          },
          {
            title: 'Input',
            url: '/components/input',
          },
        ],
      },
      {
        title: 'Docs',
        icon: Book,
        subItems: [
          {
            title: 'shadcn/ui',
            url: 'https://ui.shadcn.com',
          },
          {
            title: 'Radix UI Primitives',
            url: 'https://www.radix-ui.com/primitives/',
          },
        ],
      },
    ],
  },
  {
    title: 'Others',
    items: [
      {
        title: 'References',
        icon: BookOpen,
        subItems: [
          {
            title: 'Radix UI Themes',
            url: 'https://www.radix-ui.com/',
          },
          {
            title: 'tailwindcss',
            url: 'https://tailwindcss.com/',
          },
          {
            title: 'Lucide Icons',
            url: 'https://lucide.dev/icons/',
          },
          {
            title: 'date-fns',
            url: 'https://date-fns.org/',
          },
          {
            title: '⌘K',
            url: 'https://cmdk.paco.me/',
          },
          {
            title: 'sonner',
            url: 'https://sonner.emilkowal.ski/',
          },
          {
            title: 'React Hook Form',
            url: 'https://react-hook-form.com/',
          },
          {
            title: 'zod',
            url: 'https://zod.dev/',
          },
          {
            title: 'React Day Picker',
            url: 'https://daypicker.dev/',
          },
        ],
      },
    ],
  },
];

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="h-16">
        <AppSidebarHeader />
      </SidebarHeader>
      <SidebarContent>
        {/* グループ */}
        {groups.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            {/* メニュー */}
            <SidebarMenu>
              {group.items?.map((item) => (
                <Collapsible
                  key={`${group.title}-${item.title}`}
                  defaultOpen
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />} <span>{item.title}</span>{' '}
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                  </SidebarMenuItem>
                  <CollapsibleContent>
                    {/* サブアイテム */}
                    <SidebarMenuSub>
                      {item.subItems?.map((subItem) => (
                        <SidebarMenuSubItem
                          key={`${group.title}-${item.title}-${subItem.title}`}
                        >
                          <SidebarMenuSubButton asChild>
                            {subItem.url ? (
                              <Link
                                href={subItem.url}
                                target={
                                  subItem.url.startsWith('/')
                                    ? '_self'
                                    : '_blank'
                                }
                              >
                                {subItem.title}
                              </Link>
                            ) : (
                              <span>{subItem.title}</span>
                            )}
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
