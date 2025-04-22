import React from "react";
import { MessageSquareText, FileStack,Terminal, ScreenShare, Files } from "lucide-react";

function Grid() {
  return (
    <div className="grid max-w-5xl w-full mx-auto pl-10">
        
      <div className="box" style={{ gridArea: "box-1" }}>
      <ScreenShare />
      Write and edit code collaboratively in real-time.  
Supports Python, C++, Java, and JavaScript with syntax highlighting.

      </div>
      <div className="box" style={{ gridArea: "box-2" }}>
      <MessageSquareText />
      Chat with your team while coding.  
Discuss logic, bugs, or anything else without switching tabs.

      </div>
      <div className="box" style={{ gridArea: "box-3" }}>
      <FileStack />
      Manage multiple files in your coding session.  
Switch between scripts or add new ones as needed.

      </div>
      <div className="box" style={{ gridArea: "box-4" }}>
      <Terminal />
      View your program’s output instantly.  
Supports stdout, error logs, and more for all languages.

      </div>
      <div className="box" style={{ gridArea: "box-5" }}>
      <Files />
      Choose your language: Python, C++, Java, or JavaScript.  
Configure compile/run options with a click.

      </div>
    </div>
  );
}

export default Grid;