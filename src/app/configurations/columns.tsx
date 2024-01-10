"use client";
import { Button } from "@/components/ui/button";
import { Person } from "@/people";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {data} from '../../config'
import { flattenedData } from "./page";

export const columns: ColumnDef<any>[] = [
  {
    header: "Config Name",
    accessorKey: "configName",
  },
  {
    header: "Enabled",

    accessorKey: "enabled",
  },

  {
    header: "Orgs",
    cell: row => {
      const orgs = row.getValue() as string[]
      console.log('---orgs array---', orgs)
          return (
            <DropdownMenu>
            <DropdownMenuTrigger>
           
              <Button variant="outline" className="ml-4">
              {orgs ? orgs.length : 0 }
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
            {Array.isArray(orgs) ? orgs.map((org) => {
              return (
                <DropdownMenuItem key={Math.random()}>
                <span className='gap-4 flex flec-col'>
                  {org}
                </span>
              </DropdownMenuItem>
              )
            }): ''}
 
            
            </DropdownMenuContent>
          </DropdownMenu>
          );
        },
        enableSorting: false,
        enableHiding: false,
    accessorKey: "orgs",
  
  },
  {
    header: "Excluded Orgs",
    cell: row => {
      const orgs = row.getValue() as string[]
      console.log('excludedOrgs array---', orgs)
          return (
            <DropdownMenu>
            <DropdownMenuTrigger>
           
              <Button variant="outline" className="ml-4">
              {orgs ? orgs.length : 0 }
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
            {Array.isArray(orgs) ? orgs.map((org) => {
              return (
                <DropdownMenuItem key={Math.random()}>
                <span className='gap-4 flex flec-col'>
                  {org}
                </span>
              </DropdownMenuItem>
              )
            }): ''}
 
            
            </DropdownMenuContent>
          </DropdownMenu>
          );
        },
        enableSorting: false,
        enableHiding: false,
    accessorKey: "excludedOrgs",
  },

  
];

