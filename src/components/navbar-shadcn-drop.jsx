import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

export default function NavbarShadcnDrop() {
  return (
    <section className="flex gap-3 justify-between items-center bg-white p-2 ">
      <a href="#home">Waggles & Whiskers</a>
      <img
        className="hidden size-20 md:block"
        src="/logo.jpg"
        alt="Waggles & Whiskers"
      />

      <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <a href="#services">Services & Prices</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="#dog-gallery">Gallery</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="#testimonials">Testimonials</a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {/* <DropdownMenuItem>
                    <a href="#contact">Contact</a>
                </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
  <DropdownMenuTrigger>OpenME</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    </section>
  );
}
