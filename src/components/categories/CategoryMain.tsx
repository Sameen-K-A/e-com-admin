'use client';

import { useState } from 'react';
import CategoryTable from './CategoryTable';
import AddEditDialog from './AddEditDialog';
import { mockCategories } from '@/constants/mockCategories';
import { ICategory } from '@/types/general';
import DeleteDialog from './DeleteCatDialog';

export default function CategoryMain() {
  const categories: ICategory[] = mockCategories;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleAddCategory = () => {
    console.log('Add Category');
    setSelectedCategory(null);
    setIsDialogOpen(true);
  };

  const handleEditCategory = (category: ICategory) => {
    console.log('Edit Category:', category);
    setSelectedCategory(category);
    setIsDialogOpen(true);
  };

  const handleDeleteCategory = (category: ICategory) => {
    console.log('Delete Category request:', category);
    setSelectedCategory(category);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="h-fit">
      <div className="container mx-auto space-y-4">

        <CategoryTable
          categories={categories}
          onEdit={handleEditCategory}
          onAdd={handleAddCategory}
          onDelete={handleDeleteCategory}
        />

        <AddEditDialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          selectedCategory={selectedCategory}
        />

        <DeleteDialog
          isOpen={isDeleteDialogOpen}
          onOpenChange={setIsDeleteDialogOpen}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
}