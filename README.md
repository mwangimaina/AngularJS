# Introduction to bootstrap
Concepts in bootstrap:
- Responsiveness:
    + This refers to a layouts ability to 
    *adapt* to a particular screen size. 
- Grid system:
    + Bootstrap uses a 12-column grid system.
    + To use this, we create a parent element
    and give it the class `container` or `container-fluid`.
    Next we add the class `row` to any children of
    the element with the class `container*`. After this
    we create columns inside the row using the `col-<screen>-<size>`

```
<!-- Example -->
<section class="container">
    <div class="row">
        <div class="col-sm-4">
            ...
        </div>
        <div class="col-sm-4">
            ...
        </div>
        <div class="col-sm-4">
            ...
        </div>
    </div>  
</section>
```

NB: All column sizes within a row MUST add up to 12

- Media queries
    + They provide a way to re-style content on a page when the screen
    width changes. 
```
/*In a css file*/
@media only screen and (<set a min or max width here>){
    /*Declare styles*/
}
```

- Viewport

- Charset and lang attributes(for il18)