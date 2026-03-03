'use client'

import { useState,useEffect,useRef } from "react";
import { useRouter } from "next/navigation";

type ModelType = 'fast' | 'extedned' | 'pro';
type Theme = 'light' | 'dark';

interface ChatItem{
  id : string ;
  title :  string ;
}

export default function ImagineX(){
  const router = useRouter();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  //App States
  const [mounted , setMounted] = useState(false);
  const [theme,setTheme] = useState<Theme>('dark');
  const [prompt ,setPrompt] = useState('');
  const [isSidebarOpen,setIsSidebarOpen] = useState(false);
  const [activeChatId , setActiveChatId] = useState('1');

  //Ui Popups
  const[showUserMenu,setShowUserMenu] = useState<ModelType>('fast');
  const[showUploadPopup,setShowUploadPopup] = useState(false);
  const[showModelPopup,setShowModelPopup] = useState(false);

  //Logic States 
  const[selectedModel,setSelectedModel] = useState<ModelType>('fast');
  const[submittedPrompt,setSubmittedPrompt] = useState<string | null >(null);
}