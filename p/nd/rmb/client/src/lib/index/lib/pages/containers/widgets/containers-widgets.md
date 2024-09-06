


-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------



-------------------------------------------------

DataStructure in idb
  =>  Tables
    ->  widget_types
      ->  id
      ->  type_name
      ->  default_item_layout
      ->  default_pagination_size
      ->  ex_attr
    ->  widgets
      ->  id
      ->  widget_type_id
      ->  order
      ->  custom_item_layout
      ->  custom_pagination_size
      ->  ex_attr
    ->  widget_items
      ->  id
      ->  widget_id
      ->  initial_text
      ->  full_text
      ->  description_text
      ->  image_1
      ->  image_2
      ->  ex_attr

-------------------------------------------------

Extra features:
  =>  Option to come back on extension page, if user wants to end his search.
  =>  Extenstion update functionality should be bullet proof tested
  =>  Fill user viewable area first, fill below order widget to screen later on scroll down event
  =>  Users can also starts their own feeds channel for text, audio, video content by paying some fees
  =>  User can keep on listening audio while surfing internet in different tabs of browser or even when browser is minimised
  =>  Floating widget like winamp provide for audio, video player. So that user can take full advantage of player
  =>  Color themes
        Black-o-White, White-o-Black, Dark-Mode
        Custom themes( Select you own foreground, bg, text colors)
        Custom font across app
        Custom font size across app
        // There should be comparable diff b/w bg, text, foreground colors selected
  =>  Opacity for widget should be less when not in focus or onhover state
  =>  Extenstion update functionality should be bullet proof tested


-------------------------------------------------

Widget types:
  1.  searchInMultipleFrames
        input in search input box of widget will search key in all given websites in items and show respective results
        Example usage: 
          E-Shop: Search in multiple ecommerce sites,
          Search a person: Search person on multiple social sites
      
  2.  searchInMultipleFrames2VerticalItemsList result    
        Example
          Translate: Translate input into multiple language. This subtype widget will be good to see result in list form for results
          Email-hub

  3.  searchInSingleFrame
        Example usage:
          Audio player: Like winamp search function powered by online portals
          Video player: Like youtube
          Top Sites ( specific to given search keywords )
        This widget type can also feature suggestion area for audio and videos else then what user has searched for.
        Fav audio and video tracks can too be saved

  4.  multipleItems links
        Example Usage:
          Aps
          Social
          Links
            Recent, Fav, Recommended
          
  5.  centerSearchBar for default or selected search engines

  6.  channelUpdatesNotifier
        Example Usage:
          News / Channels feeds
            Get updates from various news channels in multple iframes for user has to first give authentication for those social sites
            User can add his own news / feeds channel by using manage option
          Social
            Get updates from various social sites in multple iframes for user has to first give authentication for those social sites
          Youtube
            To get various channel subscribed by user. This list ordered by updates on channel. Means channel with new video added will come first
 

-------------------------------------------------

A sample widgets structure should will look up as:
[
  {
    order: 1,
    rowItemsAlignment: vertical / horizontal,
    itemContentAlignment: vertical / horizontal,
    type: a / b,
    items: []
  }, {
    order: 2,
    rowItemsSettings: {
      alignment: vertical / horizontal,
      view: list / grid,
      paginationSizeForGridView: 2, 3, 4, 5, 6
    }
    itemContentSettings: {
      alignment: vertical / horizontal,
      view: list / grid,
      paginationSizeForGridView: 2 / 3 / 4 / 5 / 6
    },
    type: searchInMultipleFrames / ,
    subType: aa / bb / cc,    
    items: [{
      pinned: true / false
    }]
  }
]

-------------------------------------------------

Each record in widget table reflect each row

-------------------------------------------------

  =>  A datastructure to hold default widget set will be fetched from server and is saved in idb. 
  =>  Default structure will be used to present all available features of widget section
  =>  All customization made to default section will update default widget data structure saved in idb
  =>  Next time when widget section load it will use the data structure in local idb myWidgets
  =>  

-------------------------------------------------

Show case all types of widget here

