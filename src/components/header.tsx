import { Heart, ShoppingBag, ChevronDown, AlignLeft } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  return (
    <main>
      <header className=" h-[70px] border-b-[1px] flex items-center justify-between ">
        <nav className="text-lg ml-11 hidden md:flex ">
          <ul className=" space-x-5 font-semibold custom-nav-font flex justify-between ">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className=" outline-none flex justify-between items-center">
                  Shop <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href={"/shoptote"}>Shop All</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/customtotes"}>Customized Totes</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/handcraftedtotes"}>Hand Crafted</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/printedtotes"}>Printed Totes</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/jutetotes"}>Jute Totes</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/lookbook" className="hover:underline">
                Lookbook
              </Link>
            </li>
          </ul>
        </nav>

        {/* SMALL SCREEN NAVIGATION` */}
        <Sheet>
          <SheetTrigger className="md:hidden flex justify-start">
            <AlignLeft strokeWidth={3} size={37} className="ml-3" />
          </SheetTrigger>
          <SheetContent>
            <nav className="text-3xl flex justcenter items-center">
              <ul className=" mt-20 space-y-5 font-semibold custom-nav-font flex flex-col">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger className=" outline-none flex justify-between items-center">
                      Shop <ChevronDown size={37} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link href={"/shoptote"}>Shop All</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/customtotes"}>Customized Totes</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/handcraftedtotes"}>Hand Crafted</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/printedtotes"}>Printed Totes</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/jutetotes"}>Jute Totes</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>

                <li>
                  <Link href="/lookbook" className="hover:underline">
                    Lookbook
                  </Link>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex gap-x-5 md:mr-11 mr-3">
          <ShoppingBag strokeWidth={1.25} />
          <Heart strokeWidth={1.25} />
        </div>
      </header>
    </main>
  );
}
