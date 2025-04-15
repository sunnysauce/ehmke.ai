"use client";

import { useState } from "react";
import { Button } from "./button";

type ShareButtonProps = {
  title: string;
  description?: string;
  className?: string;
};

export function ShareButton({ title, description, className = "" }: ShareButtonProps) {
  const [isSharing, setIsSharing] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";
  
  const shareData = {
    title,
    text: description || `Check out ${title} by Michael Ehmke`,
    url,
  };

  const handleShare = async () => {
    setIsSharing(true);
    
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback for browsers that don't support the Web Share API
        copyToClipboard(`${shareData.title}: ${url}`);
      }
    } catch (error) {
      console.error("Error sharing:", error);
    } finally {
      setIsSharing(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={handleShare}
      className={className}
      disabled={isSharing}
    >
      {isSharing ? "Sharing..." : (
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
          Share
        </div>
      )}
    </Button>
  );
} 