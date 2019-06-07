class RequestAuthorization
  prepend SimpleCommand

  def initialize(header = {})
    @header = header
  end

  def call
    user
  end

  private

  attr_reader :header

  def auth_http_header
    if header[:Authorization].present?
      header[:Authorization].split(' ').last
    else
      errors.add(:token, 'Token missing')
    end
  end
end
