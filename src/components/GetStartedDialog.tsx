import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import GetStartedForm from "./GetStartedForm";
import { ArrowRight, Camera, RefreshCw, CheckCircle } from "lucide-react";

interface GetStartedDialogProps {
  trigger: React.ReactNode;
}

const GetStartedDialog = ({ trigger }: GetStartedDialogProps) => {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = useState<'capture' | 'form' | 'preview'>('capture');
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>(null);
  const [isSaving, setIsSaving] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const saveImage = async (imageData: string) => {
    try {
      setIsSaving(true);
      // Convert base64 to blob
      const response = await fetch(imageData);
      const blob = await response.blob();
      
      // Create FormData
      const formData = new FormData();
      formData.append('image', blob, 'captured_image.jpg');
      
      // Save image using fetch API
      const saveResponse = await fetch('/api/save-image', {
        method: 'POST',
        body: formData,
      });
      
      if (!saveResponse.ok) {
        throw new Error('Failed to save image');
      }
      
      const { imagePath } = await saveResponse.json();
      return imagePath;
    } catch (error) {
      console.error('Error saving image:', error);
      throw error;
    } finally {
      setIsSaving(false);
    }
  };

  const captureImage = async () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0);
        const imageData = canvas.toDataURL('image/jpeg');
        setCapturedImage(imageData);
        
        try {
          await saveImage(imageData);
          stopCamera();
          setStep('form');
        } catch (error) {
          console.error('Failed to save image:', error);
          // You might want to show an error message to the user here
        }
      }
    }
  };

  const retakePhoto = () => {
    setCapturedImage(null);
    startCamera();
  };

  React.useEffect(() => {
    if (open && step === 'capture') {
      startCamera();
    }
    return () => {
      stopCamera();
    };
  }, [open, step]);

  const handleSubmit = async (data: any) => {
    setFormData(data);
    setStep('preview');
  };

  const handleFinalSubmit = () => {
    console.log("Form data:", formData);
    setOpen(false);
    
    // Add form data to URL as query parameters
    const queryParams = new URLSearchParams({
      name: formData.name,
      age: formData.age.toString(),
      gender: formData.gender,
    }).toString();
    
    window.location.href = `https://bkins-wisdomweaver.streamlit.app/?${queryParams}`;
  };

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      setOpen(newOpen);
      if (!newOpen) {
        setStep('capture');
        setCapturedImage(null);
        setFormData(null);
        stopCamera();
      }
    }}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {step === 'capture' ? 'Take a Photo' : 
             step === 'form' ? 'Get Started' : 'Confirm Details'}
          </DialogTitle>
        </DialogHeader>
        
        {step === 'capture' ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
              {!capturedImage ? (
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img 
                  src={capturedImage} 
                  alt="Captured" 
                  className="w-full h-full object-cover" 
                />
              )}
            </div>
            {!capturedImage ? (
              <Button 
                onClick={captureImage}
                className="bg-violet-600 hover:bg-violet-700 text-white"
                disabled={isSaving}
              >
                <Camera className="mr-2 h-4 w-4" />
                {isSaving ? 'Saving...' : 'Capture Photo'}
              </Button>
            ) : (
              <div className="flex gap-4">
                <Button 
                  onClick={retakePhoto}
                  variant="outline"
                  className="border-violet-600 text-violet-600 hover:bg-violet-50"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Retake Photo
                </Button>
                <Button 
                  onClick={() => setStep('form')}
                  className="bg-violet-600 hover:bg-violet-700 text-white"
                >
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        ) : step === 'form' ? (
          <GetStartedForm onSubmit={handleSubmit} />
        ) : (
          <div className="flex flex-col items-center space-y-6">
            <div className="w-full max-w-sm mx-auto">
              <img 
                src={capturedImage!} 
                alt="Your photo" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full space-y-2">
              <h3 className="font-medium text-lg">Your Details:</h3>
              <div className="space-y-1 text-sm">
                <p><span className="text-gray-500">Name:</span> {formData?.name}</p>
                <p><span className="text-gray-500">Age:</span> {formData?.age}</p>
                <p><span className="text-gray-500">Gender:</span> {formData?.gender}</p>
              </div>
            </div>
            <div className="flex gap-4 w-full">
              <Button 
                onClick={() => setStep('form')}
                variant="outline"
                className="flex-1 border-violet-600 text-violet-600 hover:bg-violet-50"
              >
                Edit Details
              </Button>
              <Button 
                onClick={handleFinalSubmit}
                className="flex-1 bg-violet-600 hover:bg-violet-700 text-white"
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                Confirm & Continue
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedDialog;
