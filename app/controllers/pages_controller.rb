class PagesController < ApplicationController

  def index
    render 'index', layout: false
  end

  def chrome
    render 'index-chrome', layout: false
  end

  def counselor
    render 'counselor'
  end

  def stories
    render 'stories'
  end

  def first_aid
    render 'first_aid'
  end

  def wildfire
    render 'wildfire'
  end

end
