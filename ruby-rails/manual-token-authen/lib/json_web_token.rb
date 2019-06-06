class JsonWebToken
  class << self
    def encode(payload, expire = 24.hours.from_now)
      payload[:exp] = expire.to_i
      JWT.encode(payload, Rails.application.secrets.secret_key_base)
    end

    def decode(token)
      body = JWT.decode(token, Rails.application.secrets.secret_key_base)[0]
      HashWithIndifferentAccess.new body
    rescue
    end
  end
end
