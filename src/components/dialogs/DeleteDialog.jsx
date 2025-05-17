import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function DeleteDialog({
  isOpenDialog,
  setIsOpenDialog,
  removeTask,
  task,
}) {
  function cancelSubmit() {
    setIsOpenDialog(false);
  }

  async function handleRemoveTask(taskId) {
    try {
      await removeTask(taskId);
      setIsOpenDialog(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
        <DialogContent
          className="w-[40%] font-mono text-sm"
          aria-describedby={undefined}
        >
          <DialogHeader>
            <DialogTitle>Delete Task</DialogTitle>
          </DialogHeader>

          <div className="text-center mt-2">
            Would you like to delete <span className="font-bold"> {task?.title}</span> ?
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button
              type="button"
              onClick={cancelSubmit}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-500 hover:text-white cursor-pointer transition-all"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => handleRemoveTask(task.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer transition-all"
            >
              Delete
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
