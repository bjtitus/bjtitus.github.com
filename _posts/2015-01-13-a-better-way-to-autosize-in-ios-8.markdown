---
layout: post
title:  "A Better Way to Autosize in iOS 8"
date:   2015-01-13 17:55:06
---

iOS 8 provides support for resizable table view and collection view cells using AutoLayout but what if you want to autosize an arbitrary view? For instance, let's say I have a view with a label inside that I want to resize based on content with a maximum width of the size of the screen. In iOS 7 you might have used a combination of `preferredMaxLayoutWidth`, a width constraint, and `systemLayoutSizeFittingSize` to set a maximum width on the label and find the fitted size. There is now an easier way to do this with `systemLayoutSizeFittingSize:withHorizontalFittingPriority:verticalFittingPriority:`.

Using this new method we can pass our own custom CGSize as the fitting size and adjust the fitting priorities to use the size as a maximum bounds.

For instance:

```swift
var fittingSize = UILayoutFittingCompressedSize
fittingSize.width = 320
let size = myView.systemLayoutSizeFittingSize(fittingSize, withHorizontalFittingPriority: 1000, verticalFittingPriority: 250)
// Size will be a value bounded by a maximum width of 320 with the proper height, as if I set a width constraint on myView
```

