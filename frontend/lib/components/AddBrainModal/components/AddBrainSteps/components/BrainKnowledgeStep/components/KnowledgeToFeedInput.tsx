
import {

  FeedItems,
  FileUploader,
} from "@/lib/components/KnowledgeToFeedInput/components";

export const KnowledgeToFeedInput = (): JSX.Element => {


  return (
    <div>
      <div className="flex flex-row gap-10 justify-between items-center mt-5">
        <FileUploader />
      </div>
      <FeedItems />
    </div>
  );
};
