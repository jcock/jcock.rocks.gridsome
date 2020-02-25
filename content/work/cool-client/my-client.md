---
title: "Client Name"
slug: cool-client
description: "This is just a test description"
date: 2020-02-11 14:43:24
tags: ['work', 'client name', 'web', 'design', 'development']
cover: ./doggo.webp
exerpt: "Cras sed cursus ligula, sit amet lobortis tellus. Mauris ornare vel lacus sit amet posuere. Mauris in diam fringilla urna dignissim maximus sed at mauris."
published: true
---

# This is a sample work page

Hooray for markdown!

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel sapien quis ex cursus molestie. Proin ornare neque nec ultrices maximus. Sed vulputate velit a lorem condimentum mollis. Sed et augue elementum, tempus ante in, suscipit felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc eleifend libero sit amet libero imperdiet ullamcorper. Aenean dictum nulla id sapien dapibus, tincidunt rutrum arcu blandit. Donec at pretium risus.

Cras sed cursus ligula, sit amet lobortis tellus. Mauris ornare vel lacus sit amet posuere. Mauris in diam fringilla urna dignissim maximus sed at mauris. Donec euismod lacus non odio porttitor porttitor. Aenean sed ligula nibh. Fusce mauris ligula, vulputate a lobortis sed, porta nec sapien. Phasellus iaculis iaculis nibh at dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed elementum nec risus sed elementum. Pellentesque metus libero, volutpat eu diam sed, molestie commodo mauris. Nunc laoreet sollicitudin semper. Pellentesque mattis ligula at ex ornare, sit amet fermentum augue lobortis. Proin quis nulla risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;

In laoreet ultricies sapien a ultricies. Praesent feugiat magna in eros convallis, et placerat odio ultrices. Ut ut sagittis mi. Vestibulum bibendum mollis egestas. Quisque erat magna, tempus a auctor vel, euismod in elit. Praesent blandit arcu vel laoreet sollicitudin. Fusce cursus vulputate purus, et pretium metus auctor vitae. Nulla a arcu tellus. Sed a malesuada diam, fringilla accumsan sem. Etiam eu egestas odio. Sed vitae luctus nunc. Vivamus consequat elementum ante, in gravida quam ultrices nec.

## Sample code in Markdown

```js
{
  use: 'gridsome-plugin-rss',
  options: {
		contentTypeName: 'Post',
		feedOptions: {
			title: 'Bleda, a Gridsome blog starter', // <- update
			feed_url: 'https://gridsome-starter-bleda.netlify.com/feed.xml',  // <- update, leave the file name
			site_url: 'https://gridsome-starter-bleda.netlify.com'  // <- update
		},
		feedItemOptions: node => ({
			title: node.title,
			description: node.description,
			url: 'https://gridsome-starter-bleda.netlify.com/' + node.slug,  // <- update
			author: node.author,
			date: node.date
		}),
		output: {
			name: 'feed.xml' // <- if you change this, also change it in the `feed_url` above
		}
	}
},
