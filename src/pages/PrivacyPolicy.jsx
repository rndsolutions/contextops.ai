

import Footer from "../components/Footer";
import MarkdownViewer from '../components/MarkdownViewer';
import BackToHomeButton from '../components/BackToHomeButton';

export default function TermsOfService() {

  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <BackToHomeButton />
        <MarkdownViewer fileName="privacy.md" />
      </div>
      <Footer />

    </div>

  );
};
