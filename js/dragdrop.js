
      function handleFileSelect(evt) {
        evt.stopPropagation();
        evt.preventDefault();

        var files = evt.dataTransfer.files; // FileList object.

        // files is a FileList of File objects. List some properties.
        var template = _.template(usageList.innerHTML);
        document.getElementById('list').innerHTML = template({ files : files});
        evt.target.style.background = "black";
      }

      function handleDragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        evt.target.style.background = "purple";
      }


      // Setup the drag and drop listeners.
      var dropZone = document.getElementById('drop_zone');
      dropZone.addEventListener('dragover', handleDragOver, false);
      dropZone.addEventListener('drop', handleFileSelect, false);
    
