'use client'

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ICategory } from '@/types/general';

interface DeleteDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedCategory: ICategory | null;
}

export default function DeleteDialog({ isOpen, onOpenChange, selectedCategory }: DeleteDialogProps) {
  const handleDelete = () => {
    if (selectedCategory) {
      console.log('Deleted Category:', selectedCategory);
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            Do you want to delete the <b className='text-primary'>{selectedCategory?.name}</b> category?
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-2">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive" onClick={handleDelete}>
            Yes, Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}