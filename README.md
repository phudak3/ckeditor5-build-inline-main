# CKEditor 5 Super Inline Build

CKEditor 5 Super build with callable editors:
- My [Simple Inline Build](https://www.npmjs.com/package/@phudak/ckeditor5-build-inline-simple)
- My [Basic Inline Build](https://www.npmjs.com/package/@phudak/ckeditor5-build-inline-basic)
- My [Full Inline Build](https://www.npmjs.com/package/@phudak/ckeditor5-build-inline-full)

![Preview Image](sample/preview.gif "Preview Image of Super Inline Editor")

You can use all editors on same page!

## Setup

To install it, run:

```javascript
npm i --save @phudak/ckeditor5-build-inline-main
```

Creating an editor using a CKEditor 5 build is very simple and can be described in two steps:

1. Load the desired editor via the `<script>` tag.
2. Call the static `create()` method to create the editor.

In your HTML page add an element that CKEditor should replace:

```html
<div id="editor-simple"></div>
<div id="editor-basic"></div>
<div id="editor-full"></div>
```

Load the editor build 

```html
<script src="... ckeditor5-build-inline-full/build/ckeditor.js"></script>
```

**or**

```javascript
import EditorBase from "@phudak/ckeditor5-build-inline-main/build/ckeditor";
```

Call the editor

```html
<script>
    EditorBase.SimpleInlineEditor.create( document.querySelector( '#editor-simple' ) )
        .then( editor => {
            window.editor = editor;
		} )
        .catch( error => {
            console.error( 'There was a problem initializing the editor.', error );
        } );

    EditorBase.BasicInlineEditor.create( document.querySelector( '#editor-basic' ) )
        .then( editor => {
            window.editor = editor;
		} )
        .catch( error => {
            console.error( 'There was a problem initializing the editor.', error );
        } );

    EditorBase.FullInlineEditor.create( document.querySelector( '#editor-full' ) )
        .then( editor => {
            window.editor = editor;
		} )
        .catch( error => {
            console.error( 'There was a problem initializing the editor.', error );
        } );
</script>
```

## CKEditor 5 Framework

CKEditor 5 Builds allow you to quickly and easily initialize one of the many types of editors in your application. At the same time, CKEditor 5 is also a framework for creating custom-made rich text editing solutions.

To find out how to start building your own editor from scratch go to [CKEditor 5 Framework overview section of CKEditor 5 documentation](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/overview.html).


