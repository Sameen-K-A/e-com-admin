'use client'

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ICategory } from '@/types/general';

interface AddEditDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedCategory: ICategory | null;
}

export default function AddEditDialog({ isOpen, onOpenChange, selectedCategory }: AddEditDialogProps) {
  const handleSubmit = () => {
    if (selectedCategory) {
      console.log('Updating Category:', selectedCategory);
    } else {
      console.log('Creating New Category');
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {selectedCategory ? 'Edit Category' : 'Add New Category'}
          </DialogTitle>
          <DialogDescription>
            {selectedCategory
              ? 'Update the category name below.'
              : 'Enter the name for your new category.'}
          </DialogDescription>
        </DialogHeader>
        <Input placeholder="Category name" defaultValue={selectedCategory?.name ?? ''} />
        <div className="flex justify-end gap-2">
          <DialogClose asChild>
            <Button variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={handleSubmit}>
            {selectedCategory ? 'Update' : 'Create'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};