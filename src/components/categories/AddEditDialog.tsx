import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ICategory } from '@/types/general';

interface AddEditDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  editingCategory: ICategory | null;
}

export default function AddEditDialog({ isOpen, onOpenChange, editingCategory }: AddEditDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {editingCategory ? 'Edit Category' : 'Add New Category'}
          </DialogTitle>
          <DialogDescription>
            {editingCategory
              ? 'Update the category name below.'
              : 'Enter the name for your new category.'}
          </DialogDescription>
        </DialogHeader>
        <Input placeholder="Category name" />
        <div className="space-y-4">
          <div className="flex justify-end gap-2">
            <DialogClose asChild>
              <Button variant="outline" className="not-sm:w-1/2">
                Cancel
              </Button>
            </DialogClose>
            <Button className="not-sm:w-1/2" onClick={() => onOpenChange(false)}>
              {editingCategory ? 'Update' : 'Create'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};