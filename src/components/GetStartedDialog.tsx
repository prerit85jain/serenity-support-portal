
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import GetStartedForm from "./GetStartedForm";
import { ArrowRight } from "lucide-react";

interface GetStartedDialogProps {
  trigger: React.ReactNode;
}

const GetStartedDialog = ({ trigger }: GetStartedDialogProps) => {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (data: any) => {
    console.log("Form data:", data);
    setOpen(false);
    window.open("https://bkins-wisdomweaver.streamlit.app/", "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Get Started</DialogTitle>
        </DialogHeader>
        <GetStartedForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedDialog;
