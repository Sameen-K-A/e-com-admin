'use client'

import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { EllipsisVertical, Pencil, Trash2 } from 'lucide-react';
import { ICategory } from '@/types/general';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';

interface CategoryTableProps {
  categories: ICategory[];
  onAdd: () => void;
  onEdit: (category: ICategory) => void;
  onDelete: (category: ICategory) => void
}

export default function CategoryTable({ categories, onAdd, onEdit, onDelete }: CategoryTableProps) {
  return (
    <div className="overflow-hidden">
      <Button
        variant="outline"
        className="w-full justify-center hover:scale-100 mb-2 border border-primary border-dashed"
        onClick={onAdd}
      >
        Add new Category +
      </Button>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow className="border-b border-border hover:bg-transparent">
              <TableHead className="text-left w-20 p-1 px-4 text-sm font-medium text-muted-foreground">
                Category ID
              </TableHead>
              <TableHead className="text-left p-1 px-4 text-sm font-medium text-muted-foreground">
                Category Name
              </TableHead>
              <TableHead className="text-center p-1 px-4 w-20 text-sm font-medium text-muted-foreground">
                Number of products
              </TableHead>
              <TableHead className="text-center p-1 px-4 w-20 text-sm font-medium text-muted-foreground">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((cat) => (
              <TableRow key={cat.id} className="border-b border-border last:border-b-0 hover:bg-muted/50 transition-all duration-200 ease-in-out">
                <TableCell className="px-4 py-2 text-left text-sm font-medium">
                  {cat.id}
                </TableCell>
                <TableCell className="px-4 py-2 text-left text-sm">
                  {cat.name}
                </TableCell>
                <TableCell className="px-4 py-2 text-center text-sm">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {cat.productCount} products
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="hover:bg-background">
                        <EllipsisVertical />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => onEdit(cat)}>
                        <Pencil className='w-3 h-3' />Edit
                      </DropdownMenuItem>
                      {cat.productCount === 0 && (
                        <DropdownMenuItem className="text-red-600" onClick={() => onDelete(cat)}>
                          <Trash2 className='text-red-500' />Delete
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}