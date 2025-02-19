'use client'
import { IconButton } from "@/components/buttons/icon-button";
import { InputRoot, InputIcon, InputField } from "@/components/input/input";
import { Link, Copy } from "lucide-react";

interface InviteLinkInputProps {
    link: string;
}
export function InviteLinkInput(props: InviteLinkInputProps) {

    function copyToClipboard() {
        navigator.clipboard.writeText(props.link);
    }

  return (
    <InputRoot>
      <InputIcon>
        <Link size={20} />
      </InputIcon>
      <InputField readOnly defaultValue={props.link} />
      <IconButton onClick={copyToClipboard} className="-mr-2">
        <Copy size={20} />
      </IconButton>
    </InputRoot>
  );
}
