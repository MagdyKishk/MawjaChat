import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import Button from "./Button";
import { cn } from "@/util/cn";

// EmailRow Component Props
interface EmailRowProps {
  email: string;
  isVerified: boolean;
  onDelete: () => void;
  onVerify: () => void;
}

// EmailRow Component
const EmailRow: FC<EmailRowProps> = ({ email, isVerified, onDelete, onVerify }) => {
  return (
    <div className="flex items-center justify-between text-center w-full px-2 py-1 bg-neutral-50 hover:bg-neutral-100 transition duration-150 ease-in-out">
      <div className="w-1/2 text-left text-gray-800 truncate" title={email}>
        {email}
      </div>
      <div className="w-1/4 flex justify-center">
        {isVerified ? (
          <FontAwesomeIcon icon={faCheck} className="text-green-500 text-lg" />
        ) : (
          <Button
            onClick={onVerify}
              className={cn(
                "px-4 py-1",
                "bg-red-50 text-red-700 border-red-200 hover:bg-red-100 hover:text-red-800",
                "font-semibold border rounded-md shadow-sm transition duration-150 ease-in-out",
                "text-xs md:text-sm",
                "whitespace-nowrap",
              )}
            title="Verify Email"
          >
            Not Verify
          </Button>
        )}
      </div>
      <div className="w-1/4 flex gap-2 justify-center">
        <Button
          onClick={onDelete}
          className="p-2 bg-neutral-100 hover:bg-neutral-200 text-red-500 rounded transition duration-150 ease-in-out"
          title="Delete Email"
        >
          <FontAwesomeIcon icon={faTrash} className="text-sm" />
        </Button>
      </div>
    </div>
  );
};

// EmailTableHeader Component
const EmailTableHeader: FC = () => {
  return (
    <div className="flex border-b bg-neutral-100 text-gray-700 font-semibold text-sm uppercase p-2 rounded-t-md shadow">
      <div className="w-1/2 text-left">Email</div>
      <div className="w-1/4 text-center">Verified</div>
      <div className="w-1/4 text-center">Actions</div>
    </div>
  );
};

// EmailsTable Component Props
interface EmailsTableProps {
  emails: { email: string; isVerified: boolean }[];
  onDeleteEmail: (email: string) => void;
  onVerifyEmail: (email: string) => void;
}

// Main EmailsTable Component
const EmailsTable: FC<EmailsTableProps> = ({ emails, onDeleteEmail, onVerifyEmail }) => {
  return (
    <div className="mt-6 bg-neutral-50 rounded-md shadow-sm w-full">
      <EmailTableHeader />
      <div className="flex flex-col">
        {emails.map((emailData) => (
          <EmailRow
            key={emailData.email}
            email={emailData.email}
            isVerified={emailData.isVerified}
            onDelete={() => onDeleteEmail(emailData.email)}
            onVerify={() => onVerifyEmail(emailData.email)}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailsTable;
