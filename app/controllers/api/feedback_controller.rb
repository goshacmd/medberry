class Api::FeedbackController < ApiController
  def create
    attrs = params.require(:feedback).permit(:category,
      audio_problems: [:didnt_hear, :other_didnt_hear, :dropped, :unnatural_speech, :fades, :echo, :noise, :delay, :none],
      video_problems: [:didnt_see, :other_didnt_see, :bad_image, :none]
    )

    AnalyticsService.new.track_feedback(attrs)

    head :ok
  end
end
