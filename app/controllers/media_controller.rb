class MediaController < ApplicationController
  require 'fileutils'

  # GET /media
  # GET /media.xml
  def index
    @media = Medium.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @media }
    end
  end

  # GET /media/1
  # GET /media/1.xml
  def show
    @medium = Medium.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @medium }
    end
  end

  # GET /media/new
  # GET /media/new.xml
  def new
    @medium = Medium.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @medium }
    end
  end

  # GET /media/1/edit
  def edit
    @medium = Medium.find(params[:id])
  end

  # POST /media
  # POST /media.xml
  def create

    # If it's an image place it into the content directory and create a new url
    if( params[:medium][:category] == "image")
      tmp = params[:my_file];
      directory = 'content'
      newFileName = String(Time.now.to_i) + File.extname(tmp.original_filename);
      newFilePath = Rails.root.join('public', directory, newFileName)
      File.open(newFilePath, 'w') { |file|
        file.write(tmp.read)
      }
      # Remove the attribute from params and set the url
      params[:medium].delete('my_file');
      params[:medium][:url] = directory + "/" + newFileName;
    end

    @medium = Medium.new( params[:medium])

    respond_to do |format|
      if @medium.save
        format.html { render :xml => @medium, :status => :created, :location => @medium }
        format.js   { render :xml => @medium, :status => :created, :location => @medium }
        format.xml  { render :xml => @medium, :status => :created, :location => @medium }
      else
        format.html { render :xml => @medium, :status => :created, :location => @medium }
        format.js   { render :xml => @medium, :status => :created, :location => @medium }
        format.xml  { render :xml => @medium, :status => :created, :location => @medium }
      end
    end
  end

  def file_upload

  end

  # PUT /media/1
  # PUT /media/1.xml
  def update
    @medium = Medium.find(params[:id])

    respond_to do |format|
      if @medium.update_attributes(params[:medium])
        format.html { redirect_to(@medium, :notice => 'Medium was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @medium.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /media/1
  # DELETE /media/1.xml
  def destroy
    @medium = Medium.find(params[:id])
    @medium.destroy

    respond_to do |format|
      format.html { redirect_to(media_url) }
      format.xml  { head :ok }
    end
  end
end
