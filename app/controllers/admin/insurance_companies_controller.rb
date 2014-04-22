class Admin::InsuranceCompaniesController < AdminController
  def index
    @companies = InsuranceCompany.all
  end

  def new
    @company = InsuranceCompany.new
  end

  def create
    @company = InsuranceCompany.new company_params

    if @company.save
      redirect_to admin_insurance_companies_path, notice: 'Company added successfully.'
    else
      render :new
    end
  end

  private

  def company_params
    params.require(:insurance_company).permit(:name)
  end
end
