'use client';

import { useState } from 'react';
import CategoryTable from './CategoryTable';
import AddEditDialog from './AddEditDialog';
import { mockCategories } from '@/constants/mockCategories';
import { ICategory } from '@/types/general';

export default function CategoryMain() {
  const categories: ICategory[] = mockCategories;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<ICategory | null>(null);

  const handleAddCategory = () => {
    setEditingCategory(null);
    setIsDialogOpen(true);
  };

  const handleEditCategory = (category: ICategory) => {
    setEditingCategory(category);
    setIsDialogOpen(true);
  };

  return (
    <div className="h-fit">
      <div className="container mx-auto space-y-4">

        <CategoryTable
          categories={categories}
          onEdit={handleEditCategory}
          onAdd={handleAddCategory}
        />

        <AddEditDialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          editingCategory={editingCategory}
        />
      </div>
    </div>
  );
}