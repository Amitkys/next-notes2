"use client"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function App() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn className="text-center">ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell className="w-5">8 Jun</TableCell>
          <TableCell className="text-center">uiyiyiy</TableCell>
          <TableCell className="w-[70px]"><div className="flex flex-row">
           <Link className="mr-1"  href={''}><img className="h-10 w-10" src="/viewIcon.svg" alt="" /></Link>
           <Link href={''}><img className="h-6 w-6 mt-2" src="/deleteIcon.svg" alt="" /></Link>
          </div></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}