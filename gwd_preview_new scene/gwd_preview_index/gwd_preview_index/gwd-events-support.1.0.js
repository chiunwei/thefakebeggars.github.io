var gwd=gwd||{};gwd.actions=gwd.actions||{};gwd.actions.events=gwd.actions.events||{};gwd.actions.events.getElementById=function(id){var element=document.getElementById(id);if(!element){var pageDeck=document.querySelector("gwd-pagedeck");if(pageDeck){if(typeof pageDeck.getElementById==="function"){element=pageDeck.getElementById(id)}}}if(!element){switch(id){case"document.body":element=document.body;break;case"document":element=document;break;case"window":element=window;break;default:break}}return element};gwd.actions.events.addHandler=function(eventTarget,eventName,eventHandler,useCapture){var targetElement=gwd.actions.events.getElementById(eventTarget);if(targetElement){targetElement.addEventListener(eventName,eventHandler,useCapture)}};gwd.actions.events.removeHandler=function(eventTarget,eventName,eventHandler,useCapture){var targetElement=gwd.actions.events.getElementById(eventTarget);if(targetElement){targetElement.removeEventListener(eventName,eventHandler,useCapture)}};gwd.actions.events.setInlineStyle=function(id,styles){var element=gwd.actions.events.getElementById(id);if(!element||!styles){return}var transitionProperty=element.style.transition!==undefined?"transition":"-webkit-transition";var prevTransition=element.style[transitionProperty];var splitStyles=styles.split(/\s*;\s*/);var nameValue;splitStyles.forEach(function(splitStyle){if(splitStyle){var regex=new RegExp("[:](?![/]{2})");nameValue=splitStyle.split(regex);nameValue[1]=nameValue[1]?nameValue[1].trim():null;if(!(nameValue[0]&&nameValue[1])){return}element.style.setProperty(nameValue[0],nameValue[1])}});function restoreTransition(event){var el=event.target;el.style.transition=prevTransition;el.removeEventListener(event.type,restoreTransition,false)}element.addEventListener("transitionend",restoreTransition,false);element.addEventListener("webkitTransitionEnd",restoreTransition,false)};gwd.actions.timeline=gwd.actions.timeline||{};gwd.actions.timeline.dispatchTimedEvent=function(event){var customEventTarget=event.target;if(customEventTarget){var customEventName=customEventTarget.getAttribute("data-event-name");if(customEventName){event.stopPropagation();var event=document.createEvent("CustomEvent");event.initCustomEvent(customEventName,true,true,null);customEventTarget.dispatchEvent(event)}}};gwd.actions.timeline.captureAnimationEnd=function(element){if(!element){return}var animationEndEvents=["animationend","webkitAnimationEnd"];for(var i=0;i<animationEndEvents.length;i++){element.addEventListener(animationEndEvents[i],gwd.actions.timeline.dispatchTimedEvent,true)}};gwd.actions.timeline.releaseAnimationEnd=function(element){if(!element){return}var animationEndEvents=["animationend","webkitAnimationEnd"];for(var i=0;i<animationEndEvents.length;i++){element.removeEventListener(animationEndEvents[i],gwd.actions.timeline.dispatchTimedEvent,true)}};gwd.actions.timeline.pauseAnimationClassName="gwd-pause-animation";gwd.actions.timeline.CURRENT_LABEL_ANIMATION="data-gwd-current-label";gwd.actions.timeline.reflow=function(el){el.offsetWidth=el.offsetWidth};gwd.actions.timeline.pause=function(id){var el=gwd.actions.events.getElementById(id);el&&el.classList&&el.classList.add(gwd.actions.timeline.pauseAnimationClassName)};gwd.actions.timeline.play=function(id){var el=gwd.actions.events.getElementById(id);el&&el.classList&&el.classList.remove(gwd.actions.timeline.pauseAnimationClassName)};gwd.actions.timeline.togglePlay=function(id){var el=gwd.actions.events.getElementById(id);el&&el.classList&&el.classList.toggle(gwd.actions.timeline.pauseAnimationClassName)};gwd.actions.timeline.gotoAndPlay=function(id,animClass){var el=gwd.actions.events.getElementById(id);if(!(el&&el.classList&&id&&animClass)){return false}var currentLabelAnimClass=el.getAttribute(gwd.actions.timeline.CURRENT_LABEL_ANIMATION);if(currentLabelAnimClass){el.classList.remove(currentLabelAnimClass);el.removeAttribute(gwd.actions.timeline.CURRENT_LABEL_ANIMATION)}gwd.actions.timeline.play(id);if(currentLabelAnimClass==animClass){gwd.actions.timeline.reflow(el)}el.classList.add(animClass);el.setAttribute(gwd.actions.timeline.CURRENT_LABEL_ANIMATION,animClass);return true};gwd.actions.timeline.gotoAndPause=function(id,animClass){var el=gwd.actions.events.getElementById(id);if(!(el&&el.classList)){return false}if(gwd.actions.timeline.gotoAndPlay(id,animClass)){var timeoutId=window.setTimeout(function(){el.classList.add(gwd.actions.timeline.pauseAnimationClassName)},40)}return!!timeoutId};gwd.actions.timeline.gotoAndPlayNTimes=function(id,animClass,count,eventName){var el=gwd.actions.events.getElementById(id);el.gwdGotoCounters=el.gwdGotoCounters||{};var counters=el.gwdGotoCounters;var counterName=eventName+"_"+animClass+"_counter";if(typeof counters[counterName]=="undefined"){counters[counterName]=0}if(counters[counterName]<count){gwd.actions.timeline.gotoAndPlay(id,animClass)}counters[counterName]++};gwd.actions.gwdAudio=gwd.actions.gwdAudio||{};gwd.actions.gwdAudio.pause=function(receiver){gwd.actions.events.getElementById(receiver).pause()};gwd.actions.gwdAudio.play=function(receiver){gwd.actions.events.getElementById(receiver).play()};gwd.actions.gwdAudio.replay=function(receiver){gwd.actions.events.getElementById(receiver).replay()};gwd.actions.gwdGoogleAd=gwd.actions.gwdGoogleAd||{};gwd.actions.gwdGoogleAd.goToPage=function(receiver,opt_pageId,opt_transition,opt_duration,opt_easing,opt_direction){gwd.actions.events.getElementById(receiver).goToPage(opt_pageId,opt_transition,opt_duration,opt_easing,opt_direction)};gwd.actions.gwdPagedeck=gwd.actions.gwdPagedeck||{};gwd.actions.gwdPagedeck.goToPage=function(receiver,pageId,opt_type,opt_duration,opt_easing,opt_direction){gwd.actions.events.getElementById("gwd-ad").goToPage(pageId,opt_type,opt_duration,opt_easing,opt_direction)}