$(function() {

    Parse.$ = jQuery;

	// Replace this line with the one on your Quickstart Guide Page
	Parse.initialize("bHiD8Rb40AiYtkBiXh66v6kryTCmkF9YSoeo7XMh", "EMEaSJGwF8XJq2QPQ1sboY8MC7QxO9L6HyvhlsRH");

	var Blog = Parse.Object.extend("Blog");
    
    var Blogs = Parse.Collection.extend({
        model: Blog
    });
    
    var blogs = new Blogs();
    
    blogs.fetch({
	   success: function(blogs) {
           var blogsView = new BlogsView({ collection: blogs });
	       blogsView.render();
	       $('.main-container').html(blogsView.el);
	   },
	   error: function(blogs, error) {
           console.log(error);
	   }
    });
    
    var BlogsView =  Parse.View.extend({
        template: Handlebars.compile($('#blogs-tpl').html()),
        render: function(){ 
            var collection = { blog: this.collection.toJSON() };
            this.$el.html(this.template(collection));
        }
    });

});