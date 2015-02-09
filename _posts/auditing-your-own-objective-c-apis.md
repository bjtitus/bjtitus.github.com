---
layout: post
title:  "Auditing Your Own Objective-C APIs for Swift"
date:   2015-02-09 17:50:06
categories: swift objective-c programming ios
published: false
---

Swift 1.2 includes a number of new additions but one of the least talked about is that nullability may now be expressed in Objective-C headers. This means that you can do the same thing with your Objective-C APIs that Apple has been doing with their own APIs.

This StackOverflow question http://stackoverflow.com/questions/25747377/how-to-annotate-objective-c-apis-for-use-in-swift-e-g-return-types
